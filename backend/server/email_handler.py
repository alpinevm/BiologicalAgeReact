import yagmail
import os

class EmailSender:
    def __init__(self) -> None:
        self.client: yagmail.SMTP = yagmail.SMTP(os.environ['EMAIL_USERNAME'], os.environ['EMAIL_PASSWORD'])
    def _formatData(self, data) -> str:
        output: str = "<strong>CLIENT DATA</stong><br/><br/>"
        output += f"CLIENT: {data['first_name']}<br/>" 
        output += f"AGE: {data['age']}<br/>"
        return output 

    def send_data_email(self, data) -> None:
        self.client.send(to = os.environ["PRACTIONER_EMAIL"], subject = "New Patient Data", contents = [self._formatData(data)])
