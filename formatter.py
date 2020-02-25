import sys

filename = sys.argv[1]
file = open(filename)

newfile = open(filename + ".fm", "w")

for line in file:
    if line != "\n":
        if line.startswith("export") or line.startswith("];"):
            newfile.write(line)
        else:
            str = " ".join(line.split())
            str = ("\"" + str + "\",")
            str = str.replace("\n", "")
            str = str.replace("\t", "")
            str = str + "\n"
            newfile.write(str)

file.close()
newfile.close()
