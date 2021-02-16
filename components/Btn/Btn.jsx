import React from 'react';
import { Button } from 'primereact/button';

export default ({text, loading, className, icon}) => {
	return <Button label={text} icon={icon} className={"border-0 "+className} />
}


