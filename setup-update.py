import requests

file = 'bootstrap_main.c195b67ded28e8965831.js'

whatsapp_web = requests.get('https://web.whatsapp.com/' + file).text

searchValue = 'c=a(8139),'
replaceValue = 'c=a(8139);c.sendReactionsEnabled=function(){return true;};var '

whatsapp_web = whatsapp_web.replace(searchValue, replaceValue, 1)

f = open(file, 'w')
f.write(whatsapp_web)
f.close()
