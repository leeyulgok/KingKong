from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()
API_KEY = os.environ['OPENAI_API_KEY']
client = OpenAI(api_key=API_KEY)

# asst_FGYF1VFaYCELUwpw67jKExrA
# assistant = client.beta.assistants.create(
#     name="KingKong",
#     instructions="You are a personal math tutor. Write and run code to answer math questions.",
#     tools=[{"type": "code_interpreter"}],
#     model="gpt-3.5-turbo-1106"
# )

# thread_YWIvWahrGAOnK15Byrlu4l6y
# thread = client.beta.threads.create()
# print(thread)

# msg_geFV8o10ykCeZ6iPVTEb4v8M
# message = client.beta.threads.messages.create(
#     thread_id="thread_YWIvWahrGAOnK15Byrlu4l6y",
#     role="user",
#     content="I need to solve the equation `3x + 11 = 14`. Can you help me?"
# )
# print(message)

# run_jG25GfSKcePNUbcxG0jL4Zc6
# run = client.beta.threads.runs.create(
#   thread_id="thread_YWIvWahrGAOnK15Byrlu4l6y",
#   assistant_id="asst_FGYF1VFaYCELUwpw67jKExrA",
#   instructions="Please address the user as Jane Doe. The user has a premium account."
# )
# print(run)

# run = client.beta.threads.runs.retrieve(
#   thread_id="thread_YWIvWahrGAOnK15Byrlu4l6y",
#   run_id="run_jG25GfSKcePNUbcxG0jL4Zc6"
# )
# print(run)

messages = client.beta.threads.messages.list(
  thread_id="thread_YWIvWahrGAOnK15Byrlu4l6y",
)
print(messages.data[0].content[0].text.value)