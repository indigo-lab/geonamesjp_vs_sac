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

## How to

	npm install
	node main.js > geonamesjp_vs_sac.nt.txt

## Note

Travis CI による自動ビルドの結果を gh-pages にホストしています。 ビルドが成功している場合は以下の URL から JSON-LD のリンクセットを取得することができます。

* http://indigo-lab.github.io/geonamesjp_vs_sac/geonamesjp_vs_sac.nt.txt


[![Build Status](https://travis-ci.org/indigo-lab/geonamesjp_vs_sac.svg?branch=master)](https://travis-ci.org/indigo-lab/geonamesjp_vs_sac)
