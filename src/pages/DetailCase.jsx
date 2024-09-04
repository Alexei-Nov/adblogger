import React from 'react'
import Money from '../components/Money/Money'
import { useParams } from 'react-router-dom';
import Article from '../components/Article/Article';

export default function DetailCase() {
	const { slug } = useParams();

	const articleState = {
		title: '10 самых обсуждаемых платьев звезд ' + slug,
		previewImgPath: '/img/detailCase/preview.png',
		content: [
			{
				blockType: 'text',
				title: '',
				text: '<p> В продолжение нашей статьи о самых культовых нарядов звезд, собрали образы, которые собрали больше всего комментариев в сети. Помните их?</p>',
			},
			{
				blockType: 'citation',
				text: '" Глобальных проблем, на мой взгляд, всего две. Во-первых, это огромная пропасть между тем, как компания выглядит «снаружи», и тем, что она действительно представляет из себя «внутри». Например, стартап может представляться единорогом, заявлять о себе как о бирюзовой компании."',
				autorName: 'Поля Вишнякова',
				autorPhotoPath: '/img/detailCase/author.png'
			},
			{
				blockType: 'text',
				title: 'Ирина Шейк и платье с головой льва',
				text: '<p>Платье с головой льва от необычного бренда Schiaparelli, которое наделало немало шума.</p><p>Хочется добавить , что вся коллекция бренда этого года была весьма неоднозначной, но досталось больше всего Ирине.</p>',
			},
			{
				blockType: 'gallery',
				imgList: [
					'/img/detailCase/gallery-1.png',
					'/img/detailCase/gallery-2.png'
				]
			},
			{
				blockType: 'text',
				title: 'Доспехи Зендаи на премьере второй части Дюны',
				text: '<p>Вот-вот состоится премьера второй части «Дюны», но доспехи Зендаи вызвали такую бурю эмоций, думаем они не утихнут даже после премьеры.</p>',
			},
			{
				blockType: 'gallery',
				imgList: [
					'/img/detailCase/gallery-3.png'
				]
			},
		]
	}

	const moneyState = {
		title: 'Зарабатывайте </br> на&nbsp;своём контенте',
		btnText: 'Зарегистрироваться'
	}

	return (
		<>
			<Article article={articleState} />
			<Money moneyState={moneyState} />
		</>
	)
}
