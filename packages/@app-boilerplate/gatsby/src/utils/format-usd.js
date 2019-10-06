export default function formatUsd(n, dollars = false){
	if(!n){
		return null
	}
	if(!dollars){
		n = n / 100
	}
	return n.toLocaleString(`en-US`, {
		style: `currency`,
		currency: `USD`,
	})
}
