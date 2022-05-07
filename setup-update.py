import requests
from sys import platform

def replaceFileBin(file : str, searchValue : bytes, replaceValue : bytes):
    f = open(file, 'rb')
    content = f.read()
    content = content.replace(searchValue, replaceValue)
    f.close()
    f = open(file, 'wb')
    f.write(content)
    f.close()

if platform == 'linux' or platform == 'linux2' or platform == 'macos':
    file = 'bootstrap_main.c195b67ded28e8965831.js'
else:
    file = 'bootstrap_main.ab8798a02018acb3b512.js'

whatsapp_web = requests.get('https://web.whatsapp.com/' + file).content
f = open(file, 'wb')
f.write(whatsapp_web)

searchValue = bytes('d=n(a(52013)),c=a(8139),', 'utf-8')
replaceValue = bytes('d=n(a(52013)),c=a(8139);c.sendReactionsEnabled=function(){return true;};var ', 'utf-8')

replaceFileBin(file, searchValue, replaceValue)
replaceFileBin('content-script.js', bytes('[FILE]', 'utf-8'), bytes(file, 'utf-8'))
