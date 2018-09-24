from subprocess import call
from os import getcwd

path=getcwd()
# path=path.replace('\\','/')

# print(f'cd {path}')
call(f'cd {path}',shell=True)

call('git add *')
msg=input("Commit message: ")
if msg=='':
    msg=''
if msg.lower() not in ['exit','quit','q']:
    call(f'git commit -m "{msg}"')
    call('git push')
