import openai

# Set your OpenAI API key
openai.api_key = "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"

try:
    # Make your OpenAI API request here
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",  # Use the appropriate engine
        prompt="Hello world",
    )
    print(response)
except openai.error.OpenAIError as e:
    # Handle OpenAI API error here, e.g. retry or log
    print(f"OpenAI API returned an error: {e}")
except Exception as e:
    # Handle other exceptions
    print(f"An error occurred: {e}")
