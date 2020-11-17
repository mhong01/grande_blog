from rest_framework import serializers
from grandeapi.models import User

class UserSerializer (serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    firstName = serializers.CharField(required=False, allow_blank=True, max_length=255)
    lastName = serializers.CharField(required=False, allow_blank=True, max_length=255)
    email = serializers.CharField(required=False, allow_blank=True, max_length=255)
    # title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.firstName = validated_data.get('firstName', instance.firstName)
        instance.lastName = validated_data.get('lastName', instance.lastName)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.save()
        return instance