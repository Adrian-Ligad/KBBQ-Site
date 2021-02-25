import { TestiPage, TestimonyHeader, TestimonyContent} from './TestimonyPage.styled'

import TestimonyModal from './TestimonyModal'
import TestimonySubmission from './TestimonySubmission'

export default function TestimonyPage() {
    return (
        <TestiPage>
            <TestimonyHeader>
                Reviews
            </TestimonyHeader>
            <TestimonyContent>
                <TestimonyModal/>
                <TestimonySubmission/>
            </TestimonyContent>
        </TestiPage>
    )
}