// tools
import React from "react"
import Link from "../Link"

// styles
import { Bleed } from "./styles/bleed"
import { Ul } from "./styles/ul"
import { Stats } from "./styles/stats"
import { Caption } from "./styles/caption"
import { ZigzagPicture } from "./styles/zigzag-picture"

// helper
import { datestamp } from "./helpers"

// constants
import { ROUTE_ARTICLE_DIR } from "../../../constants/list"

// return
export default props => {
  return (
    <Bleed>
      <Ul status={props.status}>
        {props.items.map(item => {
          return (
            <li key={item._id}>
              <Link
                to={item.slug && ROUTE_ARTICLE_DIR + "/" + item.slug}
                onClick={() =>
                  props.nextArticleHeading({
                    title: item.title,
                    subtitle: item.subtitle,
                    author: item.author,
                    slug: item.slug
                  })}
              >
                <section>
                  <figure>
                    {item.type !== "placeholder" &&
                      <div
                        style={{
                          backgroundImage: "url(" + item.poster.medium + ")"
                        }}
                        aria-label={item.title + " poster image"}
                      />}
                  </figure>
                  <h2 title={item.title}>
                    {item.title}
                  </h2>
                  <Caption status={props.status}>
                    {item.summary.length > 250
                      ? item.summary.substr(0, 249) + "…"
                      : item.summary}
                  </Caption>
                  <div>
                    <Stats {...props}>
                      {item.tag === "photo-essay" && item.stats.images === 1
                        ? "Single-Frame Narrative"
                        : (item.tag + "")
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, l => l.toUpperCase())}
                      {item.type !== "placeholder" &&
                        !props.private &&
                        (item.tag !== "photo-essay"
                          ? " | " +
                            Math.round(item.stats.words / 200) +
                            "-minute read"
                          : " | " +
                            item.stats.images +
                            " Image" +
                            (item.stats.images > 1 ? "s" : ""))}
                    </Stats>
                    {!props.private
                      ? <em>
                          {item.author.name}
                          {item.type !== "placeholder" &&
                            " · " + datestamp(item["post-date"])}
                        </em>
                      : <em>
                          {item["post-date"] && datestamp(item["post-date"])}
                        </em>}
                  </div>
                </section>
                <ZigzagPicture
                  style={
                    item.type !== "placeholder"
                      ? { backgroundImage: `url(${item.poster.medium})` }
                      : null
                  }
                />
              </Link>
            </li>
          )
        })}
      </Ul>
    </Bleed>
  )
}
