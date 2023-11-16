import Skeleton from "../../components/Skeleton/Skeleton"

export function withSkeleton(Component, type, count){
    return function withSkeleton(props){
        const {isLoading, ...restProps} = props

        if(isLoading){
            return (<Skeleton count={count} type={type}/>)
        }

        return <Component {...restProps}/>
    }
}