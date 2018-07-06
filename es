#!/data/data/com.termux/files/usr/bin/bash
cyan='\033[1;36m'
 green='\033[1;32m'
  red='\033[1;31m'
   yellow='\033[1;33m'
    blue='\033[1;34m'
    purple='\033[1;35m'
     reset='\033[0m'
     grey='\033[1;30m'
echo -e "$cyan"
read -p  'Esh-->' sk
if [ $sk = 'add' ]; then
cd $PREFIX/bin/eshsys
if [ -f mcpl ]; then
echo -e "$yellow Pls Enter The Shortcut Command :- "
echo -e "$cyan"
read -p 'Esh-->' nsk
cd $PREFIX/bin/eshsys
echo "$nsk" >> $PREFIX/bin/eshsys/name
echo -e "$blue Pls Enter The Command"
echo " "
echo -e "$red Are You Using Multiple Commands [y/n] ?"
cd $PREFIX/bin/eshsys
cp mcpl $PREFIX/bin
cd $PREFIX/bin
mv -n mcpl $nsk
echo -e "$cyan"
read -p 'Esh-->' hsk
echo " "
if [ $hsk = 'y' ]; then
echo -e "$yellow Pls Enter 1 Command Per Line"
echo " "
sleep 2
echo -e "$red Pls Enter No. Of Lines [$yellow 2/10$red ]$green"
read -p 'Esh-->' x
if [ $x = '2' ]; then
for run in {1..2}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '3' ]; then
for run in {1..3}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '4' ]; then
for run in {1..4}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '5' ]; then
for run in {1..5}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '6' ]; then
for run in {1..6}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '7' ]; then
for run in {1..7}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '8' ]; then
for run in {1..8}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '9' ]; then
for run in {1..9}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '10' ]; then
for run in {1..10}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
if [ $x = '11' ]; then
for run in {1..11}
do
  echo "$green"
  read -p 'Esh-->' n
  echo "$n" >> $PREFIX/bin/$nsk
done
sleep 1
esh
fi
else 
echo "Pls Enter The Command: "
read -p 'Esh-->' csk
echo "$csk" >> $PREFIX/bin/$nsk
sleep 1
esh
fi
else
echo -e "$red Pls Run The Setup Script Again"
fi
fi
if [ $sk = 'check' ]; then
cd $PREFIX/bin/eshsys
ls | cat -n name
esh
fi
if [ $sk = 'quit' ]; then
sleep 1
echo -e "$red Script Created By --> "
echo " "
sleep 2
echo -e "$grey    __________ "
echo -e "$cyan   / _____/  | __ "
echo -e "$blue   \_____ \| |/ / "
echo -e "$blue  /       \   < "
echo -e "$cyan  /______  /__|_ \ "
echo -e "$grey         \/     \/ "
echo " "
sleep 1
echo -e "$green Thaks For Using$blue EasyShell$green Script"
sleep 1
fi
if [ $sk = $sk ]; then
echo -e "$red Wrong Command"
echo " "
echo -e "$yellow Type 'help' For all Instruction"
esh
fi 
if [ $sk = 'help' ]; then
echo -e "$green Hello I am$blue Suyash$green Here to help you--->"
echo " "
echo -e "$grey This Are some Command U can Use In EasyShell"
cd $PREFIX/bin/eshsys
ls | cat -n help
echo " "
sleep 3
echo -e "$green I Hope It helps To You"
esh
fi
