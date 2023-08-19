pipeline{
    agent {
        docker{
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages{
        stage('Build'){
            steps{
            sh ''' 
            npm install
            '''
            }
        }
        stage('Package'){
            steps{
                sh 'tar czf Node.tar.gz node_modules index.js package.json public app.json'
            }
        }
        stage('Deploy'){
            steps{
                sshPublisher(
                    publishers: [
                    sshPublisherDesc(
                    configName: 'earnhiveserver', 
                    transfers: [sshTransfer(
                    cleanRemote: false, excludes: '', 
                    execCommand: '''mv ./home/ubuntu/one/node-js-sample/Node.tar.gz /home/ubuntu/test/Node.tar.gz;
                    cd /home/ubuntu/test/
                    tar -xf Node.tar.gz;
                    docker build -t nodeimage .;
                    docker run -d --name nodecontainer -p 5001:5000 nodeimage;''', 
                    execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', 
                    sourceFiles: '**/*.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)
                    ]
                )
            }
        }
    }
}