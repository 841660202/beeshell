import React from 'react'
import {
  Image,
  ImageStyle,
  ImageSourcePropType
} from 'react-native'
import variables from '../../common/styles/variables'
// 添加这一段
import angleDoubleLeft from '../../common/images/icons/angle-double-left.png'
import angleDoubleRight from '../../common/images/icons/angle-double-right.png'
import angleDown from '../../common/images/icons/angle-down.png'
import angleLeft from '../../common/images/icons/angle-left.png'
import angleUp from '../../common/images/icons/angle-up.png'
import angleRight from '../../common/images/icons/angle-right.png'
import checkCircle from '../../common/images/icons/check-circle.png'
import cameraO from '../../common/images/icons/camera-o.png'
import check from '../../common/images/icons/check.png'
import clockO from '../../common/images/icons/clock-o.png'
import cogO from '../../common/images/icons/cog-o.png'
import ellipsisH from '../../common/images/icons/ellipsis-h.png'
import exclamationCircleO from '../../common/images/icons/exclamation-circle-o.png'
import envelopeO from '../../common/images/icons/envelope-o.png'
import editO from '../../common/images/icons/edit-o.png'
import externalLink from '../../common/images/icons/external-link.png'
import homeO from '../../common/images/icons/home-o.png'
import minus from '../../common/images/icons/minus.png'
import pictureO from '../../common/images/icons/picture-o.png'
import plusCircleO from '../../common/images/icons/plus-circle-o.png'
import plusSquareO from '../../common/images/icons/plus-square-o.png'
import plus from '../../common/images/icons/plus.png'
import questionCircleO from '../../common/images/icons/question-circle-o.png'
import questionCircle from '../../common/images/icons/question-circle.png'
import search from '../../common/images/icons/search.png'
import starHalfO from '../../common/images/icons/star-half-o.png'
import starO from '../../common/images/icons/star-o.png'
import star from '../../common/images/icons/star.png'
import thLargeO from '../../common/images/icons/th-large-o.png'
import timesCircleO from '../../common/images/icons/times-circle-o.png'
import timesCircle from '../../common/images/icons/times-circle.png'
import times from '../../common/images/icons/times.png'
import trashO from '../../common/images/icons/trash-o.png'
import userO from '../../common/images/icons/user-o.png'
import usersO from '../../common/images/icons/users-o.png'
const iconDatas = {
    "angle-double-left": angleDoubleLeft,
    "angle-double-right": angleDoubleRight,
    "angle-down": angleDown,
    "angle-left": angleLeft,
    "angle-right": angleRight,
    "angle-up": angleUp,
    "camera-o": cameraO,
    "check-circle": checkCircle,
    "check": check,
    "clock-o": clockO,
    "cog-o": cogO,
    "edit-o": editO,
    "ellipsis-h": ellipsisH,
    "envelope-o": envelopeO,
    "exclamation-circle-o": exclamationCircleO,
    "external-link": externalLink,
    "home-o": homeO,
    "minus": minus,
    "picture-o": pictureO,
    "plus-circle-o": plusCircleO,
    "plus-square-o": plusSquareO,
    "plus": plus,
    "question-circle-o": questionCircleO,
    "question-circle": questionCircle,
    "search": search,
    "star-half-o": starHalfO,
    "star-o": starO,
    "star": star,
    "th-large-o": thLargeO,
    "times-circle-o": timesCircleO,
    "times-circle": timesCircle,
    "times": times,
    "trash-o": trashO,
    "user-o": userO,
    "users-o": usersO
}
// 添加这一段
export interface IconProps {
  style?: ImageStyle
  type?: string
  size?: number | string | null | undefined
  tintColor?: string | null | undefined // Android 平台无效
  source?: ImageSourcePropType
}

export class Icon extends React.Component<IconProps, any> {
  static displayName = 'Icon'
  static defaultProps = {
    type: 'angle-down',
    size: 14,
    style: {},
    tintColor: variables.mtdBrandPrimaryDark,
    source: null
  }

  render () {
    let { type, size, style, tintColor, source } = this.props

    const mainStyle = {
      tintColor,
      width: size,
      height: size
    }

    if (size == null) {
      delete mainStyle.width
      delete mainStyle.height
    }

    return (
      <Image
        style={[
          style,
          {
            ...mainStyle
          }
        ]}
        source={!!source ? source : iconDatas[`${type}`]}
      />
    )
  }
}
