GR='\033[3;32m';
RED='\033[1;31m';
Y='\033[1;33m';
B='\033[1;34m';
NC='\033[0m'; # No Color
printf "\n";
printf "${Y}--------------------Welocme to GitHub--------------------${NC}\n\n";
printf "${RED}Enter to get 'status' ${NC}\n";
read c;
git status;
printf "${RED}Enter to 'add' files ${NC}\n";
read c;
git add .;
git status;
printf "\n${B}Enter the commit message: ";
read message;
m=`echo ${message}`;
git commit -m "${m}";
printf "\n${GR}Enter origin name: ";
read origin;
o=`echo ${origin}`;
git push origin ${o};

printf "${Y}---------------------------Thank You------------------------${NC}\n\n";
