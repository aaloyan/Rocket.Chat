pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }
        
        stage('Install yarn') {
            steps {
                dir('') {
                    // Install dependencies using Yarn
                    sh 'apt install yarn -y'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                dir('/var/lib/jenkins/workspace/Fork-rocket/') {
                    // Clean installation by removing the node_modules directory
                    sh 'rm -rf node_modules'
                    // Install dependencies using Yarn
                    sh 'yarn install'
                }
            }
        }
        
        stage('Build') {
            steps {
                dir('/var/lib/jenkins/workspace/Fork-rocket/') {
                    sh 'yarn global add turbo-cli' // Install turbo-cli globally if not already installed
                    sh 'turbo run build' // Execute the build scenario using the turbo command
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests for your Node.js app using Yarn
                sh 'yarn test'
            }
        }
    }
}


