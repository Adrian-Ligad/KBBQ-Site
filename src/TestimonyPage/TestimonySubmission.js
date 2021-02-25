import { TestiSubmission, TestiSubmissionHeader, TestiSubmissionContent, TestiSubmissionColumn, TestiSubmit } from './TestimonyPage.styled'

export default function TestimonySubmission() {
    return(
        <TestiSubmission>
            <TestiSubmissionHeader>
                Want your opinion to be shared? Submit your reviews here!
            </TestiSubmissionHeader>
            <TestiSubmissionContent>
                <TestiSubmissionColumn>

                </TestiSubmissionColumn>
                <TestiSubmissionColumn style = {{background: "yellow"}}>

                </TestiSubmissionColumn>
            </TestiSubmissionContent>
            <TestiSubmit>
                <button>Submit</button>
            </TestiSubmit>
        </TestiSubmission>
    )
}