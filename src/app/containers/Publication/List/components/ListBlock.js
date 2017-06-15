// tools
import React from "react"
import { Link } from "react-router"
import { List, Stats, Caption, ZigzagPicture } from "../../../../components/List"

// helper
import { datestamp } from "../helpers"

// routes
import { ROUTE_ARTICLE_DIR } from "../routes"


// return
export const ListBlock = props => {
	return (
		<List status={ props.status }>
		{
			props.items.map(function(item) {
				return (
					<li key={ item.id }>
						<Link to={ item.slug ? ROUTE_ARTICLE_DIR + "/" + item.slug : null }>
							<section>
								<figure>
									{ item.type !== "placeholder" ? <img src={ item.poster.medium } alt={ item.title + " poster image" } /> : null }
								</figure>
								<h2>{ item.title }</h2>
								<Caption>{ item.summary }</Caption>
								<div>
									<Stats>{
										( item.category === "photo-essay" && item.stats.images === "1" ) ? "Photograph" :
										(item.category + "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
									}{
										item.type !== "placeholder" ?
											( item.category !== "photo-essay" ) ? 
											" | " 
												+ Math.round(item.stats.words / 200) 
												+ "-minute read" :
											" | " 
												+ item.stats.images + " Image" + (item.stats.images > 1 ? "s" : "")
										: null
									}</Stats>
									<em>{ item.author.name }{ item.type !== "placeholder" ? " · " + datestamp(item["post-date"]) : null }</em>
								</div>
							</section>
							<ZigzagPicture style={ item.type !== "placeholder" ? { backgroundImage: `url(${ item.poster.medium })` } : null } />
						</Link>
					</li>
				)
			})
		}
		</List>
	)
}