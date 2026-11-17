class Animal:
  def __init__(self,name):
    self.name = name
    
class Dog(Animal):
  def __init__(self,breed,name):
    super().__init__(name)
    self.breed = breed

  def display(self):
    print(f"{self.name} is a {self.breed}.")

s1 = Dog("Labrador", "Ruby")
s2 = Dog("Golden Retriever","Casper")
s1.display()
s2.display()