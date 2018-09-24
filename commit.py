from subprocess import call
from os import getcwd

path = getcwd()
call(f'cd {path}', shell = True)
print(f'>>> cd {path}')

call('git add *')
print('>>> git add *')

msg = input("Commit message: ")
if msg == '':
    msg = 'Auto'
if msg.lower() not in ['exit', 'quit', 'q']:
    call(f'git commit -m "{msg}"')
    print(f'>>> git commit -m {msg}')

    call('git push')
    print('>>> git push')
