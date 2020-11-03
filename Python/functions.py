#Definisjon av en funksjon
def hello(name):
    print("Hello " + name)

#Kall funksjon
print("\n\nPrinter parameter: Simen med funksjonen: hello")
hello("Simen")

#Funkjson hvor det er uvisst antall parametere passert: Bruk * eller ** foran parameter.
def my_function(*kids):
  print("The youngest child is " + kids[2])

print("\n\nPrinter kids[2] når man ikke vet hvor lang inputlista er")
my_function("Emil", "Tobias", "Linus")

#Funksjon hvor vi har en normalverdi: "Norway": Passerer Norway hvis et argument ikke blir gitt
def country(country = "Norway"):
  print("I am from " + country)

print('\n\nPrinter "Norway" når ingen verdi blir sendt, og printer "Sweden" når "Sweden blir passert"')
country()
country("Sweden")

#Liste som parameter
def food(food):
  for i in food:
    print(i)

fruits = ["apple", "banana", "cherry"]

print("\n\nPrinter alle elementene i arrayet: fruits med funksjonen: food")
food(fruits)

#Return value
def times(x):
    return 5*x

print("\n\nReturner 25 fra funksjonen og printer det")
print(times(5))


#Rekursjon // FARLIG
def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)