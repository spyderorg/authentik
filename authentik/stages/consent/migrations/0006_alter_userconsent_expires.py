# Generated by Django 5.0.2 on 2024-02-29 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authentik_stages_consent", "0005_alter_consentstage_mode"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userconsent",
            name="expires",
            field=models.DateTimeField(default=None, null=True),
        ),
    ]