pipeline{
    agent {
        node{
            label 'docker-agent-node'
        }
    }
    stages{
        stage('Add .env'){
            steps{
            sh ''' 
            rm -rf *.tar.gz
            echo 'PASSWORD=${earnhivePASSWORD}' > .env
            echo 'NAME=${earnhiveNAME}' >> .env
            echo 'DB=${earnhiveDB}' >> .env
            echo 'CLOUDINARY_CLOUD_NAME=${earnhiveCLOUDINARY_CLOUD_NAME}' >> .env
            echo 'CLOUDINARY_KEY=${earnhiveCLOUDINARY_KEY}' >> .env
            echo 'CLOUDINARY_SECRET=${earnhiveCLOUDINARY_SECRET}' >> .env
            '''
            }
        }
        stage('Package'){
            steps{
                sh '''
                tar czf earnhive-$BUILD_NUMBER.tar.gz component model .env pages public styles utils jsconfig.json next.config.js package-lock.json package.json
                '''
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
                    execCommand: '''sudo mv /home/jenkins/workspace/ernhive/earnhive-*.tar.gz /var/www/earnhive/;
                    cd /var/www/earnhive/;
                    sudo tar -xf earnhive-*.tar.gz;
                    npm ci;
                    sudo npm run build;
                    sudo systemctl restart nginx; 
                    ''', 
                    execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', 
                    sourceFiles: '**/*.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)
                    ]
                )
            }
        }
    }
}