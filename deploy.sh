chmod 400 $aws_pem
ssh -o "StrictHostKeyChecking=no" -i $aws_pem $aws_user@$aws_ip "rm -rf ws-transaction"
ssh -o "StrictHostKeyChecking=no" -i $aws_pem $aws_user@$aws_ip "mkdir ws-transaction"
scp -o "StrictHostKeyChecking=no" -i $aws_pem * $aws_user@$aws_ip:~/ws-transaction
ssh -o "StrictHostKeyChecking=no" -i $aws_pem $aws_user@$aws_ip "bash" < ./run.sh