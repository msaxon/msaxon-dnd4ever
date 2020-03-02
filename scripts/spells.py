import sys
import string
from bs4 import BeautifulSoup

newFile = open("spells.js", "w", errors="replace")
newFile.write("export const spells = [\n")


def startSpell(file):
    file.write("\t{\n")


def endSpell(file):
    file.write("\t},\n")


def addSimpleAtt(file, key, value):
    file.write("\t\t" + key + ": \"" + value + "\",\n")


with open("spells.html", encoding='ASCII', errors="replace") as fp:
    soup = BeautifulSoup(fp, features="html.parser")
    spells = soup.find_all("article")

    for i in range(len(spells)):
        # for i in range(0, 5):
        startSpell(newFile)
        print("Converting spell: " + str(i) + "/" + str(len(spells)) +
              " - " + str(spells[i].div.div.h2.string))

        # name
        addSimpleAtt(newFile, "name", spells[i].div.div.h2.string)

        # level, school
        levelSchool = spells[i].div.div.strong.em.string
        if("Cantrip" in levelSchool):
            addSimpleAtt(newFile, "school", levelSchool.split(" ")[0])
            addSimpleAtt(newFile, "level", "0")
        else:
            addSimpleAtt(newFile, "level", levelSchool.split(" ")[0][0])
            addSimpleAtt(newFile, "school", levelSchool.split(" ")[2])

        # casting time, range, comp, duration
        addSimpleAtt(newFile, "castingTime",
                     spells[i].div.contents[3].contents[1].contents[2])
        addSimpleAtt(newFile, "range",
                     spells[i].div.contents[3].contents[1].contents[6])
        addSimpleAtt(newFile, "components",
                     spells[i].div.contents[3].contents[1].contents[10])
        addSimpleAtt(newFile, "duration",
                     spells[i].div.contents[3].contents[1].contents[14]
                     .string.replace("\n", "").replace("\t", ""))

        # effect
        if(len(spells[i].div.contents[3].contents[3].contents) == 1):
            addSimpleAtt(newFile, "effect",
                         spells[i].div.contents[3].contents[3].string)
        else:
            print(spells[i].div.contents[3].contents[3].contents)
            line = ''
            for c in spells[i].div.contents[3].contents[3].contents:
                if(str(c) != "<br/>"):
                    line += str(c)
                else:
                    print('<br />')
            addSimpleAtt(newFile, "effect", line)

        # higher levels
        if(len(spells[i].div.contents[3].contents[5].contents) != 1):
            addSimpleAtt(newFile, "higherLevels",
                         spells[i].div.contents[3].contents[5].contents[1])

        endSpell(newFile)

newFile.write("];")
newFile.close()
