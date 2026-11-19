student ={
  "name": "Astha",
  "dept": "CSE",
  'age': 20,
  "name1": "Lavann"
  
}
print(student['name'])
print(student.get('age'))
student["city"] = "banglore"
student["marks"] = 87
student.pop("age")
print(student)

for key, value in student.items():
  print(key,":",value)
print(student.keys())
print(student.values())