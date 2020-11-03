#Fra 0 - 999
for i in range(1000):
    print(i)

#Fra 2 - 5
for i in range(2, 6):
    print(i)

#Fra 3 - 297 med increment 3
for i in range(3, 300, 3):
    print(i)


fruits = ["apple", "banana", "cherry"]

#Print hvert element i arrayet / Loope gjennom array
for i in fruits:
    print(i)

#Print hvert bokstav i en string / Loope gjennom string
for i in "banana":
    print(i)

#Escape når i = "banana"
for i in fruits:
  print(i)
  if i == "banana":
    break

#Ikke print banana
for i in fruits:
    if i == "banana":
        continue
    print(i)

#Else i for loop / gjør noe på slutten av loopen
for i in range(6):
    print(i)
else:
    print("Finally finished!")

#Nested for loops / Loop i loop
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
