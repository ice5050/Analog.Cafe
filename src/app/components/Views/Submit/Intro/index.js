// tools
import React from "react"

// components
import Heading from "../../../ArticleHeading"
import Button from "../../../Button"
import Figure from "../../../Figure"
import Link from "../../../Link"
import { Section, Article } from "../../../ArticleStyles"

// images
import illustrationComposer from "./images/illustration-composer.jpg"
import illustrationCode from "./images/illustration-computer_code.jpg"

// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle={"Submit 🎞"}
				pageSubtitle="Get your work featured on Analog.Cafe"
			/>
			<Section>

				<Button to="/submit/compose" red>Submit Now</Button>
				<p><Link to="/login"><strong>Log in</strong></Link> to edit your profile and view your existing submissions.</p>
				<p><em>You can create your account once you submit your work. It&rsquo;ll take 10 seconds.</em></p>

				<hr />

				<h3>&ldquo;Compose&rdquo; Your Submission</h3>
				<p>Upload your image(s) and submit. Use Analog.Cafe <Link to="/submit/compose"><em>Composer</em></Link> to type up your story; it&rsquo;ll automatically format and save everything for you.</p>

				<Figure src={illustrationComposer}>When you edit your submission you see it exactly how it would appear when published.</Figure>

				<p>You can write, photograph and submit pretty much anything you like, as long as you own the copyright for your work. NSFW submissions aren&rsquo;t accepted (yet).</p>
				<p>Every submission gets reviewed for style, quality, spelling etc. <strong>This is a curated publication with an aim to have a character of its own, which means not every work gets accepted.</strong> Even if it&rsquo;s really good.</p>
				<p>Once you send your submission you will be able to review its status using an account created for you. It takes about a week on average to review, edit and schedule works on Analog.Cafe. You&rsquo;ll get an email notification should the status of your submission change.</p>
				<p><strong>You will also be able to control how your work gets distributed.</strong> We ask that you grant your permission to exhibit it here on Analog.Cafe as well as other online outlets, such as Twitter or Facebook. Additionally, you may choose to allow your photographs to be used by other authors and photographers within their submissions here on Analog.Cafe. You&rsquo;ll get a link to your profile with each image.</p>
				<p>Rest assured that every post, including the one that uses your work, is reviewed for quality and appropriateness.</p>

				<blockquote>
					<p>Additionally, you may choose to allow your photographs to be used by other authors and photographers within their submissions. You&rsquo;ll get a link to your profile with each image.</p>
				</blockquote>

				<h3>Get Your Work Accepted & Published</h3>

				<p><strong>Analog.Cafe focuses heavily on film photography as the subject of every submission.</strong> That being said, if your work suits the general style of the publication but doesn&rsquo;t use photographs shot on film it can still be accepted.</p>

				<p>Here is a list of formats submissions are typically accepted in:</p>
				<ul>
					<li><strong>A Photo</strong> &mdash; one image, a title and perhaps a caption for the photograph.</li>
					<li><strong>Photo Essay</strong> &mdash; you can have one image with text or a few images that make up a story.</li>
					<li><strong>Opinion</strong> or <strong>&ldquo;Theory and Practice&rdquo;</strong> article &mdash; your thoughts, advice, and opinions on film photography and art in general.</li>
				</ul>

				<p>For images, JPG and PNG formats are accepted, maximum 5MB per file. Please make sure the quality is good enough to display on large screens.</p>

				<Figure src={illustrationCode}>This is one of the first images of Analog.Cafe web app. It didn&rsquo;t look much at first. Shot on Kodak Ektar 100.</Figure>
				<h3>A Few Fine Details</h3>
				<p>Your submission does not have to be exclusive to Analog.Cafe. Please limit the number of links and promotional phrases in your work to minimum. Oh and your email and account information will not be shared with or sold to anyone <span role="img" aria-label="Thumb Up">👍</span></p>

				<hr />

				<Button to="/submit/compose" red>Submit Now</Button>

			</Section>
		</Article>
	)
}
