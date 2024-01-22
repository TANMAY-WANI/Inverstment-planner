from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet


def text_to_pdf(text, output_filename='output.pdf'):
    # Create a PDF document with letter size pages
    doc = SimpleDocTemplate(output_filename, pagesize=letter)
    story = []

    # Define the styles for heading and normal text
    styles = getSampleStyleSheet()

    # Adjust heading size
    heading_style = styles['Heading1']
    heading_style.fontSize = 18

    # Adjust spacing between paragraphs
    normal_style = styles['Normal']
    normal_style.spaceAfter = 12

    # Split text into lines and handle headings
    lines = text.split('\n')
    for line in lines:
        if line.startswith('**') and line.endswith('**'):
            # Handle heading
            heading_text = line[2:-2]
            story.append(Paragraph(heading_text, heading_style))
        else:
            # Normal text
            story.append(Paragraph(line, normal_style))

    # Add spacing between paragraphs
    story.append(Spacer(1, 12))

    # Build the document
    doc.build(story)

