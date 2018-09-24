from subprocess import call
from os import getcwd

path=getcwd()
call(f'cd {path}',shell=True)

call('git add *')
msg=input("Commit message: ")
if msg=='':
    msg='Auto'
if msg.lower() not in ['exit','quit','q']:
    call(f'git commit -m "{msg}"')
    call('git push')
