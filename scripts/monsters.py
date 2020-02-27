import sys
import string
from bs4 import BeautifulSoup

newFile = open("monsters.js", "w")
newFile.write("export const monsters = [\n")


def startMonster(file):
    file.write("\t{\n")


def endMonster(file):
    file.write("\t},\n")


def addSimpleAtt(file, key, value):
    file.write("\t\t" + key + ": \"" + value + "\",\n")


def addMultiWordAtt(file, key, value):
    file.write("\t\t" + "".join(key.split(" ")) + " \"" + value + "\",\n")


def startComplexAtt(file, name):
    file.write("\t\t" + "".join(name.split(" ")) + ": [\n")


def endComplexAtt(file):
    file.write("\t\t],\n")


def addComplexAtt(file, name, value):
    file.write("\t\t\t\"" + name + " " + value + "\",\n")


with open("monsters.html", encoding='utf8') as fp:
    soup = BeautifulSoup(fp, features="html.parser")

    modals = soup.find_all("div", class_="modal-body")

    for i in range(len(modals)):
        startMonster(newFile)
        print("Converting: " + str(i) + "/" + str(len(modals)) + " - " +
              str(modals[i].contents[0].div.h2.string))

        # name
        addSimpleAtt(newFile, "name", modals[i].contents[0].div.h2.string)

        # size, type, alignment
        oneLiner = modals[i].contents[1].div.em.string
        alignment = oneLiner.split(",")[1]
        size = oneLiner.split(",", 1)[0].split(" ", 1)[0]
        type = oneLiner.split(",", 1)[0].split(" ", 1)[1]
        addSimpleAtt(newFile, "size", size)
        addSimpleAtt(newFile, "alignment", alignment)
        addSimpleAtt(newFile, "type", type)

        # challenge rating
        addSimpleAtt(newFile, "cr", modals[i].contents[1].findAll(
            "div")[1].contents[1].string)

        # ac
        addSimpleAtt(
            newFile, "ac", modals[i].contents[3].div.contents[1].string)

        # hp
        addSimpleAtt(
            newFile, "hp", modals[i].contents[4].div.contents[1].string)

        # speed
        addSimpleAtt(newFile, "speed",
                     modals[i].contents[5].div.contents[1].string)

        # statblock
        addSimpleAtt(newFile, "str",
                     modals[i].contents[7].findAll("div")[6].string)
        addSimpleAtt(newFile, "dex",
                     modals[i].contents[7].findAll("div")[7].string)
        addSimpleAtt(newFile, "con",
                     modals[i].contents[7].findAll("div")[8].string)
        addSimpleAtt(newFile, "int",
                     modals[i].contents[7].findAll("div")[9].string)
        addSimpleAtt(newFile, "wis",
                     modals[i].contents[7].findAll("div")[10].string)
        addSimpleAtt(newFile, "cha",
                     modals[i].contents[7].findAll("div")[11].string)

        # weird things
        for thingy in modals[i].contents[8].div.findAll("div"):
            if (thingy.div):
                addMultiWordAtt(
                    newFile, thingy.div.contents[0].string, thingy.div.contents[1].string)

        line = 10
        currentComplexAtt = "abilities"

        while(line < len(modals[i])):
            #print(str(line) + " line out of " + str(len(modals[i])))
            if(line == 10):
                # print('starting')
                startComplexAtt(newFile, currentComplexAtt)

            if(isinstance(modals[i].contents[line], str)
                    or str(modals[i].contents[line]) == "<br/>"
                    or (isinstance(modals[i].contents[line].div.string, str)
                        and (modals[i].contents[line].div.string.isspace() == True))):
                # whitespace
                # print("skipping")
                abc = 0

            elif(isinstance(modals[i].contents[line].div.string, str) and isinstance(modals[i].contents[line].div.h4.u.string, str)):
                # new thing
                # print("new thingy")
                newThing = modals[i].contents[line].div.h4.string
                currentComplexAtt = newThing
                endComplexAtt(newFile)
                startComplexAtt(newFile, currentComplexAtt)

            else:
                # print("adding")
                for j in range(1, len(modals[i].contents[line].div.contents) - 1):
                    if isinstance(modals[i].contents[line].div.contents[j].string, str):
                        addComplexAtt(newFile, modals[i].contents[line].div.contents[0].string,
                                      modals[i].contents[line].div.contents[j].string)

            line += 1

        endComplexAtt(newFile)
        endMonster(newFile)

newFile.write("];")
newFile.close()
