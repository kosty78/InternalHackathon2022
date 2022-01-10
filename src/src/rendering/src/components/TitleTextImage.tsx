import { Text, Field, withDatasourceCheck, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type TitleTextImageProps = StyleguideComponentProps & {
  fields: {
    Title: Field<string>;
    Text: Field<string>;
  };
};

const TitleTextImage = (props: TitleTextImageProps): JSX.Element => (
  <div>
    <Text field={props.fields.Title} />
    <RichText className="contentDescription" field={props.fields.Text} />
  </div>
);

export default withDatasourceCheck()<TitleTextImageProps>(TitleTextImage);
