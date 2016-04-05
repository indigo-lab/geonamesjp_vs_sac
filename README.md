# geonamesjp_vs_sac

[GeoNames.jp](http://geonames.jp/) と[統計に用いる標準地域コード (総務省統計局・統計LOD)](http://data.e-stat.go.jp/lodw/provdata/sac/) のリンクセットジェネレータ

## What's this?

統計に用いる標準地域コード (以下 SAC) の SPARQL Endpoint に SPARQL を発行して、
GeoNames.jp の URI とのリンクセットを N-Triples 形式で出力する node.js スクリプトです。
GeoNames.jp と SAC を関連付けることで、
標準地域コードを元に作成されたデータと GeoNames.jp を元に作成されたデータの相互運用性の向上が期待できます。

GeoNames.jp は時間に依存しない地名だけの URI を保持するのに対し、
SAC は期間を持った URI を採用しています。
GeoNames.jp に対して SAC のほうがより限定された意味を持つと考えられるので、
両者の関係を [skos:narrowMatch](http://www.w3.org/2004/02/skos/core#narrowMatch) を使用して表現しています。

2016年3月以前に公開していた
[次世代統計利用システム](http://statdb.nstac.go.jp/system-info/api/api-spec/)
とのリンクセットはこちらの
[ブランチ](https://github.com/indigo-lab/geonamesjp_vs_sac/tree/2015-05-07)
からどうぞ。

## How to

	npm install
	node main.js > geonamesjp_vs_sac.nt.txt

## Example

	<http://geonames.jp/resource/北海道> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01000-19700401> .
	<http://geonames.jp/resource/北海道札幌市> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01100-19720401> .
	<http://geonames.jp/resource/北海道札幌市> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01100-19731201> .
	<http://geonames.jp/resource/北海道札幌市中央区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01101-19720401> .
	<http://geonames.jp/resource/北海道札幌市中央区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01101-19720401> .
	<http://geonames.jp/resource/北海道札幌市北区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01102-19720401> .
	<http://geonames.jp/resource/北海道札幌市北区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01102-19720401> .
	<http://geonames.jp/resource/北海道札幌市東区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01103-19720401> .
	<http://geonames.jp/resource/北海道札幌市東区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01103-19720401> .
	<http://geonames.jp/resource/北海道札幌市白石区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01104-19720401> .
	<http://geonames.jp/resource/北海道札幌市白石区> <http://www.w3.org/2004/02/skos/core#narrowMatch> <http://data.e-stat.go.jp/lod/sac/C01104-19720401> .
	...

## Note

Travis CI による自動ビルドの結果を gh-pages にホストしています。 ビルドが成功している場合は以下の URL から N-Triples 形式のリンクセットを取得することができます。

* http://indigo-lab.github.io/geonamesjp_vs_sac/geonamesjp_vs_sac.nt.txt


[![Build Status](https://travis-ci.org/indigo-lab/geonamesjp_vs_sac.svg?branch=master)](https://travis-ci.org/indigo-lab/geonamesjp_vs_sac)
