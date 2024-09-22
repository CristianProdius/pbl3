import string

import openai


def read_file(path: string):
    with open(path) as file:
        data = file.read()
    return data


def make_summary(path: string):
    data = read_file(path)
    prompt = "Summarize the following text and present the summary in an easy-readable format, without including additional information that is not present in the initial text:" + data
    client = openai.OpenAI()
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]

    )

    #return completion.choices[0].message.content