# router.py
# 2023.11.5
# Ian Kollipara

from fastapi import FastAPI, Depends
from .services.holiday_service import HolidayService

api = FastAPI()

@api.get("/") 
def hello(holiday_service = Depends(HolidayService)):
	return holiday_service.get_hello("Ian")

@api.get("/today")
def today(holiday_service = Depends(HolidayService)):
	return holiday_service.get_today()

