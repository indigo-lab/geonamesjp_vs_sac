# geonamesjp_vs_sac
[GeoNames.jp](http://geonames.jp/) と[都道府県・市区町村コード情報 (次世代統計利用システム)](http://statdb.nstac.go.jp/system-info/api/api-spec/) のリンクセット

## What's this?
都道府県・市区町村コード情報 (Standard Area Code、以下 SAC) は、統計に用いる標準地域コードを RDF で提供するたデータセットです。
GeoNames.jp と SAC を関連付けることで、
標準地域コードを元に作成されたデータと GeoNames.jp を元に作成されたデータの相互運用性の向上が期待できます。

GeoNames.jp は時間に依存しない地名だけの URI を保持するのに対し、
SAC は期間を持った URI を採用しています。
GeoNames.jp に対して SAC のほうがより限定された意味を持つと考えられるので、
両者の関係を [skos:narrowMatch](http://www.w3.org/2004/02/skos/core#narrowMatch) を使用して表現しています。 


## Example

	@prefix sac:   <http://statdb.nstac.go.jp/lod/sac/> .
	@prefix skos:  <http://www.w3.org/2004/02/skos/core#> .
	@prefix gnjp:  <http://geonames.jp/resource/> .
	
	gnjp:北海道  skos:narrowMatch  sac:C01000-19700401 .
	gnjp:北海道三石郡三石町  skos:narrowMatch  sac:C01606-19700401 , sac:C01606-20060331 .
	gnjp:北海道三笠市  skos:narrowMatch  sac:C01222-19700401 .
	gnjp:北海道上川郡上川町  skos:narrowMatch  sac:C01457-19700401 .
	gnjp:北海道上川郡下川町  skos:narrowMatch  sac:C01468-19700401 .
	gnjp:北海道上川郡剣淵町  skos:narrowMatch  sac:C01465-19700401 , sac:C01465-19780101 .
	gnjp:北海道上川郡和寒町  skos:narrowMatch  sac:C01464-19700401 .
	gnjp:北海道上川郡当麻町  skos:narrowMatch  sac:C01454-19700401 .
	gnjp:北海道上川郡愛別町  skos:narrowMatch  sac:C01456-19700401 .
 
## Note
* ボキャブラリの妥当性を検討するためのベータ版の状態です (2015/05/07 時点)
* 4,671 Triples (2015/05/07 時点)
* リンクセットのトリプルに加えて、リンクセット自体のメタデータを [VoID Vocabulary](http://www.w3.org/TR/void/) で記述しています。
 
## Link predicate
このリンクセットでは主語に gnjp、述語に skos:narrowMatch、目的語に SAC が指定されています。

skos:narrowMatch のドメイン／レンジはともに skos:Concept とされていますが、
gnjp は gn:Feature のインスタンス、 SAC は sacs:StandardAreaCode のインスタンスです。
これらは skos:Concept またはそのサブクラスであるとは明示されていないことに注意が必要です。

* 明示はされていないが、推論できるという立場(現状維持)。ただし、SAC が skos:Concept のインスタンスであると第三者が勝手に宣言してしまうことに関する是非。
* gnjp sac ともに skos:Concept の派生となるよう働きかけていく
* 他のプロパティを探す、または専用のプロパティを用意することで代替

 
 