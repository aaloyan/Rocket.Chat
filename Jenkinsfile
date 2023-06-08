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
                 // Remove existing yarn.lock file if present
                 sh 'rm -f yarn.lock'

            // Install dependencies using Yarn
                 sh 'yarn install --frozen-lockfile'
                }
            }
        }

//         stage('Install Dependencies') {
//             steps {
//                 dir('/var/lib/jenkins/workspace/Fork-rocket/') {
//                     // Install dependencies using Yarn
//                     sh 'yarn'
//         }
//     }
// }

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
