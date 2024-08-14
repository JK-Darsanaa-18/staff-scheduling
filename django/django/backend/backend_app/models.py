from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def _str_(self):
        return self.email

class TimeOffRequest(models.Model):
    employeeName = models.CharField(max_length=100)
    startDate = models.DateField()
    endDate = models.DateField()
    reason = models.TextField()
    status = models.CharField(max_length=10, choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Denied', 'Denied')])

    def __str__(self):
        return f"{self.employeeName} - {self.startDate} to {self.endDate}"

class ShiftSwapRequest(models.Model):
    yourEmailID = models.EmailField()
    yourName = models.CharField(max_length=100)
    swapWithEmailID = models.EmailField()
    swapWithName = models.CharField(max_length=100)
    reason = models.TextField()
    status = models.CharField(max_length=10, choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Denied', 'Denied')])

    def __str__(self):
        return f"Swap Request from {self.yourName} to {self.swapWithName} - Status: {self.status}"
    
class Staff(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    SHIFT_CHOICES = [
        ('Day', 'Day'),
        ('Afternoon', 'Afternoon'),
        ('Night', 'Night'),
    ]

    name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    phoneNo = models.CharField(max_length=15)
    address = models.TextField()
    shift = models.CharField(max_length=10, choices=SHIFT_CHOICES)
    dob = models.DateField()
    email = models.EmailField()

    def __str__(self):
        return self.name
class Attendance(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent')])
    time = models.TimeField()

    def __str__(self):
        return f"{self.staff.name} - {self.date} - {self.status}"

class Shift(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    location = models.CharField(max_length=255)
    required_staff = models.PositiveIntegerField()

    def __str__(self):
        return f"Shift {self.name} on {self.date}"