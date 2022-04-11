# Asena_backend
پکیج هایی که در سیستم عامل نصب هستند برای اجرای بک اند:

psql (PostgreSQL) 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

rabbitmq 3.8.2

در زمینه نصب پکیج های requirements.txt، نصب پکیج rasterio می تواند مشکل ساز باشد. در صورت اشکال اون رو آخرین پکیج نصب کن.
در زمینه خود تنظیمات جنگو باید فایل asena/settings.py رو تغییر بدی.

در بخش دیتابیس تنظیمات local به صورت زیر می باشد.

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'asena',
        'USER': 'postgres',
        'PASSWORD': 'Alireza12851376',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

باید اسم user و password کاربری که استفاده می کنه رو وارد کنی و Host رو تغییر بدی.

در قسمت Allowed Hosts باید سرور مورد استفاده قرار گیرد.

ALLOWED_HOSTS = ['127.0.0.1']

در ادامه وارد فایل asena/celery_conf.py برای تنظیمات پکیج celery می شویم.

celery_app.conf.broker_url = 'amqp://'

در خط بالا باید در ادامه USERNAME و PASSWORD سرور را وارد کنید.

برای داکرایزکردن dockerfile بخش جنگو نوشته شده است. در این فایل برای راه اندازی پکیج celery باید دوخط کد زیر ران شود.

celery -A asena worker -l INFO -D
celery -A asena beat -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler --detach 

پس از آن با کد خط زیر جنگو ران می شود. باید سرور و پورت مورد نظر در این جا با مقادیر زیر جایگزین شود.

python3 manage.py runserver 0.0.0.0:8000
