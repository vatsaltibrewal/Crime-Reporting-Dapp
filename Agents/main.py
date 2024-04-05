import os
from langchain_google_genai import ChatGoogleGenerativeAI
from crewai import Agent, Task, Crew, Process

if __name__ == "__main__":

    # Load the google gemini api key
    google_api_key = os.getenv("GOOGLE_API_KEY")

    # Set gemini pro as llm
    llm = ChatGoogleGenerativeAI(
        model="gemini-pro", verbose=True, temperature=0.9, google_api_key=google_api_key
    )