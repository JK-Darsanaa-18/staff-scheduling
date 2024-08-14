from rest_framework import serializers
from .models import User
from rest_framework import serializers
from .models import TimeOffRequest, Attendance
from .models import ShiftSwapRequest
from .models import Staff,Shift

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']


class TimeOffRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeOffRequest
        fields = '__all__'

class ShiftSwapRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShiftSwapRequest
        fields = '__all__'
        
class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'
class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

class ShiftSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shift
        fields = ['id', 'name', 'date', 'start_time', 'end_time', 'location', 'required_staff']