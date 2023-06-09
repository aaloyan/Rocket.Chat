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

                //     // Install dependencies using Yarn
                //    sh 'yarn install'
               }
           }
        }


        // stage('Install Dependencies') {
        //     steps {
        //         dir('/var/lib/jenkins/workspace/Fork-rocket/') {
        //             // Install dependencies using Yarn
        //             sh 'yarn install'
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                // Build your Node.js app using Yarn
                sh 'yarn build'
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
