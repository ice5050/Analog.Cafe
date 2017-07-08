// tools
import React from "react"

// components
import Heading from "../../../ArticleHeading"
import { LinkButton, ButtonGroup } from "../../../Button"
import Figure from "../../../Picture"
import Link from "../../../Link"
import { Section, Article } from "../../../ArticleStyles"


// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="Submit"
				pageSubtitle="Get featured on Analog.Cafe"
			/>
			<Section>

				<ButtonGroup>
					<LinkButton to="/submit/compose" red>Submit Now</LinkButton>
					<p><em>- or -</em></p>
					<p><Link to="/log-in"><strong>Log in</strong></Link> to edit your profile and view your existing submissions.</p>
				</ButtonGroup>

				<Figure src="/images/figures/submit-camera.jpg" feature>A double-exposed Instax Mini Monochrome.</Figure>


				<h3>How to Submit</h3>
				<p>It&rsquo;s very easy to use <em>Analog.Cafe Composer</em>. You can copy-paste your story and photos, or comfortably write and edit everything right here. The Composer tool will do all the formatting and beautification for you.</p>
				<Figure src="/images/figures/submit.gif">Analog.Cafe Composer in action (GIF video).</Figure>
				<p><strong>Image Suggestions</strong> &mdash; when you upload your images, you will be presented with a few curated <em>Image Suggestions</em>. They are hand-picked selections by the editor that you can freely use here on Analog.Cafe website. A credit to the original photographer will appear automatically.</p>
				<p>Once you confirm your own submission, you will have a chance to participate or opt out from the <em>Image Suggestions</em> program.</p>

				<h3>How to Get Accepted</h3>

				<p>Analog.Cafe focuses heavily on film photography as the subject of every submission. That being said, if your work suits the general style of the publication but doesn&rsquo;t use photographs shot on film it can still be accepted.</p>

				<p>Here is a list of formats submissions are typically accepted in:</p>
				<ul>
					<li><strong>A Photo</strong> &mdash; one image, a title and perhaps a caption for the photograph.</li>
					<li><strong>Photo Essay</strong> &mdash; you can have one image with text or a few images that make up a story.</li>
					<li><strong>Opinion/Article</strong> &mdash; your thoughts, advice, and opinions on film photography and art in general.</li>
				</ul>

				<p>For images, JPG and PNG formats are accepted, maximum 5MB per file. Please make sure the quality is good enough to display on large screens.</p>

				<h3>A Few Finer Details</h3>
				<p>When you submit your work, you must also agree to the below rules.</p>
				<p><em>Your submission does not have to be exclusive to Analog.Cafe. Please limit the number of links and promotional phrases in your work to minimum. Oh and your email and account information will not be shared with or sold to anyone.</em></p>

				<ButtonGroup>
					<LinkButton to="/submit/compose" red>Submit Now</LinkButton>
					<p><em>- or -</em></p>
					<p><Link to="/log-in"><strong>Log in</strong></Link> to edit your profile and view your existing submissions.</p>
				</ButtonGroup>

			</Section>
		</Article>
	)
}
