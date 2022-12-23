import yagmail
import os

class EmailSender:
    def __init__(self) -> None:
        self.client: yagmail.SMTP = yagmail.SMTP(os.environ['EMAIL_USERNAME'], os.environ['EMAIL_PASSWORD'])
          
    def send_data_email(self, data) -> None:
        # TODO: Return cleaner data
        self.client.send(to = os.environ["PRACTIONER_EMAIL"], subject = "New Patient Data", contents = data)
