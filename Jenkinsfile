pipeline {
    agent none

    environment {
        VERSION = ''
    }

    stages {
        stage ('Set Version') {
            agent { label 'maven' }

            steps {
                script {
                    // Get the current date in format YYYYMMDD
                    def dateFormat = new java.text.SimpleDateFormat("yyyyMMdd")
                    def date = new java.util.Date()
                    def dateStr = dateFormat.format(date)

                    // Get the short commit hash
                    def commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()

                    // Combine date and commit hash to create the version
                    VERSION = "${dateStr}-${commitHash}"

                    echo "Set version to ${VERSION}"
                }
            }
        }

        stage ('Build') {
            agent { label 'node' }

            steps {
                container('node') {
                    sh 'npm ci && npm run build'
                }
            }
        }

        stage ('Build Container Image') {
            when { expression { env.BRANCH_NAME == "master" } }

            agent { label 'kaniko' }

            steps {
                container('kaniko') {
                    script {
                        sh """
                            /kaniko/executor \
                                --context "${env.WORKSPACE}" \
                                --dockerfile "${env.WORKSPACE}/Dockerfile" \
                                --destination "docker.block2block.me/block2block-webapp:${VERSION}"
                        """
                    }
                }
            }
        }

        stage ('Tag Commit') {
            when { expression { env.BRANCH_NAME == 'master' } }

            agent { label 'maven' }

            steps {
                script {
                    withCredentials([gitUsernamePassword(credentialsId: 'jenkins-github-creds', gitToolName: 'Default')]) {
                        def TAG_NAME = "v${VERSION}"
                        def tagExists = sh(
                                script: """
                                git fetch --tags
                                git tag -l ${TAG_NAME} | grep -w ${TAG_NAME} || echo "TAG_NOT_FOUND"
                            """,
                                returnStdout: true
                        ).trim()

                        if (tagExists == "TAG_NOT_FOUND") {
                            echo "Tag ${TAG_NAME} does not exist. Creating and pushing the tag."
                            sh """
                                git config user.name 'Block2Block CI' || exit 1
                                git config user.email 'ethan@block2block.me' || exit 1
                                git tag ${TAG_NAME}
                                git push origin ${TAG_NAME}
                            """
                        } else {
                            echo "Tag ${TAG_NAME} already exists. Skipping tag creation."
                        }
                    }
                }
            }
        }

        stage ('Cleanup Workspace') {
            agent any

            steps {
                cleanWs()
            }
        }
    }
}