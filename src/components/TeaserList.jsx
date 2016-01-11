import React from 'react' // eslint-disable-line
import View from '../components/View'
import TeaserListHeader from '../components/TeaserListHeader'
import ProjectTeaser from '../components/ProjectTeaser'
import LanguageTeamTeaser from '../components/LanguageTeamTeaser'
import UserTeaser from '../components/UserTeaser'
// import { flattenClasses } from '../utils'

const TeaserList = ({
  children,
  title,
  items,
  type,
  filterable,
  ...props
}) => {
  let TeaserComponent
  const teaserListTheme = {
    base: {
      m: 'Mb(r1h)'
    }
  }
  const listTheme = {
    base: {
      m: 'Mt(r1)'
    }
  }
  switch (type) {
    case 'projects':
      TeaserComponent = ProjectTeaser
      break
    case 'languageTeams':
      TeaserComponent = LanguageTeamTeaser
      break
    case 'translators':
      TeaserComponent = UserTeaser
      break
    default:
      TeaserComponent = () => (<div>Teaser</div>)
      break
  }
  // TODO: Replace static list with dynamic list
  return (items.length > 0) ? (
    <View theme={teaserListTheme}>
      <TeaserListHeader title={title} type={type} showFilter={filterable}/>
      <View theme={listTheme}>
        {items.map((item, key) => (
          <TeaserComponent details={item} key={key}/>
        ))}
      </View>
    </View>
  ) : null
}

export default TeaserList
