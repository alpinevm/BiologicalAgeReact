import yagmail
import os

class EmailSender:
    def __init__(self) -> None:
        self.client: yagmail.SMTP = yagmail.SMTP(os.environ['EMAIL_USERNAME'], os.environ['EMAIL_PASSWORD'])
    
    def _getSign(self, num) -> str:
        if num == 0:
            return ""
        if num < 0:
            return "-"
        return "+"

    def _formatQuestions(self, questions) -> tuple[int, str]:
        bio_age_delta: int = 0
        question_html = "<strong>QUESTIONS</strong><br/><br/>"
        for question in sorted(questions, key=lambda d: d['ageDelta']):
            bio_age_delta += question['ageDelta'] 
            sign = self._getSign(question['ageDelta']) 
            question_html += f"QUESTION: {question['question']}<br/>ANSWER: {question['answer']}, {sign}{question['ageDelta']}<br/><br/>" 
        return bio_age_delta, question_html

    def _formatData(self, data) -> str:
        bio_age_delta, question_html = self._formatQuestions(data['question_responses'])
        output: str = "<strong>CLIENT DATA</strong><br/><br/>"
        output += f"NAME: {data['first_name']}<br/>" 
        output += f"AGE: {data['age']}<br/>"
        output += f"BIOLOGICAL AGE: {data['age'] + bio_age_delta}<br/><br/>"
        output += question_html
        return output 

    def send_data_email(self, data) -> None:
        self.client.send(to = os.environ["PRACTIONER_EMAIL"], subject = "New Patient Data", contents = [self._formatData(data)])
