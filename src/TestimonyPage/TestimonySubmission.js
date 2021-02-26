import { useState } from 'react'

import { TestiSubmission, TestiSubmissionHeader, TestiSubmissionContent, TestiSubmissionColumn, TestiSubmissionRow, TestiInput, TestiSubmit } from './TestimonyPage.styled'
import RatingStars from './Rating'

export default function TestimonySubmission() {
    const [ rating, ratingChanged ] = useState(0);
    const [ fName, changeFName ] = useState("")
    const [ lName, changeLName ] = useState("")
    const [ review, changeReview ] = useState("")
    
    return(
        <TestiSubmission>
            <TestiSubmissionHeader>
                Want your opinion to be shared? Submit your reviews here!
            </TestiSubmissionHeader>
            <TestiSubmissionContent>
                <form style = {{width: "100%"}}>
                    <TestiSubmissionColumn>
                        <TestiSubmissionRow>
                            <TestiInput type = "text" id = "fname" name = "fname" placeholder = "First Name" required
                            />
                            <TestiInput type = "text" id = "lname" name = "lname" placeholder = "Last Name" required
                            />
                        </TestiSubmissionRow>
                        <TestiSubmissionRow>
                            <RatingStars ratingChanged = {ratingChanged}
                            />
                        </TestiSubmissionRow>
                        <TestiSubmissionRow>
                            <textarea type = "text" id = "review" name = "review" placeholder = "Fill me in!" 
                                style = {{height: "15em", width: "95%"}} required
                            />
                        </TestiSubmissionRow>
                    </TestiSubmissionColumn>
                </form>
            </TestiSubmissionContent>
            <TestiSubmit>
                <button>Submit</button>
            </TestiSubmit>
        </TestiSubmission>
    )
}